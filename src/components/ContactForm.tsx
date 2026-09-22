import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * A visitor-facing contact form.
 *
 * If `profile.web3formsKey` is set, messages are sent silently in the
 * background via Web3Forms (https://web3forms.com — free, no account
 * password, just an access key emailed to you) and the visitor never
 * leaves the page.
 *
 * If it's empty, the form falls back to a pre-filled `mailto:` link —
 * zero configuration, works everywhere, but opens the visitor's own
 * email client.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  // Honeypot anti-spam: invisible to real visitors, but a script that
  // blindly fills every field will fill this one too — if it's checked,
  // we quietly pretend the message was sent and skip the real request.
  const [botcheck, setBotcheck] = useState(false)

  const usesWeb3Forms = profile.web3formsKey.trim().length > 0

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (botcheck) {
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
      return
    }

    const subject = `Nouveau message depuis le portfolio — ${name}`

    if (usesWeb3Forms) {
      setStatus('sending')
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: profile.web3formsKey,
            subject,
            from_name: name,
            name,
            email,
            message,
            botcheck: false,
          }),
        })
        const data = await response.json()

        if (data.success) {
          setStatus('sent')
          setName('')
          setEmail('')
          setMessage('')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    // Fallback : pas de clé Web3Forms configurée -> mailto pré-rempli.
    const body = `De : ${name} (${email})\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent-violet/60 focus:bg-white/[0.05] disabled:opacity-50'

  const isSending = status === 'sending'

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-xl gap-4 text-left">
      {/* Honeypot — masqué pour les humains, souvent rempli par les bots */}
      <div className="absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="botcheck">Laisser ce champ vide</label>
        <input
          type="checkbox"
          id="botcheck"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          checked={botcheck}
          onChange={(e) => setBotcheck(e.target.checked)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
            Nom
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={isSending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className={inputClass}
            data-cursor-hover
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
            Votre email
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={isSending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@exemple.com"
            className={inputClass}
            data-cursor-hover
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          disabled={isSending}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Une question, une opportunité, un projet... écrivez-moi !"
          className={`${inputClass} resize-none`}
          data-cursor-hover
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSending}
        whileHover={{ scale: isSending ? 1 : 1.02 }}
        whileTap={{ scale: isSending ? 1 : 0.97 }}
        data-cursor-hover
        className="btn-primary mx-auto mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
      </motion.button>

      <p className="text-center text-xs text-muted">
        {status === 'sent' &&
          (usesWeb3Forms
            ? '✓ Message envoyé — merci, je réponds dès que possible !'
            : '✓ Votre client email va s’ouvrir avec le message déjà prêt — il ne reste qu’à l’envoyer.')}
        {status === 'error' &&
          `Une erreur est survenue. Écrivez-moi directement à ${profile.email}.`}
        {(status === 'idle' || status === 'sending') &&
          (usesWeb3Forms
            ? `Envoyé directement, en toute discrétion, à ${profile.email}.`
            : `Ce site n'a pas de serveur : le bouton ouvre votre messagerie, déjà remplie, à destination de ${profile.email}.`)}
      </p>
    </form>
  )
}
