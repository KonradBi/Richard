import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Verwende die Umgebungsvariable für den API-Key oder einen Platzhalter
const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder_key');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Falls kein API-Key vorhanden, simulieren wir Erfolg für Entwicklungszwecke
    if (!process.env.RESEND_API_KEY) {
      console.log('Entwicklungsmodus: E-Mail würde gesendet werden an muetze@arc-muetze.de');
      console.log(`Von: ${name} (${email})`);
      console.log(`Nachricht: ${message}`);
      return NextResponse.json({ success: true, data: { id: 'dev-mode-email-id' } });
    }

    const data = await resend.emails.send({
      from: 'Arcmuetze Website <onboarding@resend.dev>',
      to: ['muetze@arc-muetze.de'],
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Fehler beim Senden der Email' });
  }
}
