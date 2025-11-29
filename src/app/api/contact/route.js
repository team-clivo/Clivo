import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, budget, message } = body;

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Faltan campos requeridos." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // URL del logo para entorno local (ajusta el puerto si es necesario)
    const logoUrl = "http://localhost:4321/logo.png";

    // Plantilla HTML con diseño y mensaje motivador
    const htmlContent = `
      <div style="background-color:#f9fafb;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#333;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,0.1);overflow:hidden;">
          
          <div style="background:#111827;padding:20px;text-align:center;">
            <img src="${logoUrl}" alt="Clivo Logo" style="height:60px;margin-bottom:10px;">
            <h1 style="color:white;font-size:22px;margin:0;">Nuevo mensaje de contacto</h1>
            <p style="color:#f97316;font-size:14px;margin-top:8px;">
              Tu idea, nosotros la hacemos realidad 🚀
            </p>
          </div>

          <div style="padding:30px;">
            <p style="font-size:16px;">Has recibido un nuevo mensaje a través del formulario de contacto de <strong>Clivo</strong>.</p>

            <div style="margin-top:20px;">
              <p><strong>👤 Nombre:</strong> ${name}</p>
              <p><strong>🏢 Empresa:</strong> ${company || "No especificada"}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>📞 Teléfono:</strong> ${phone || "No especificado"}</p>
              <p><strong>💼 Servicio:</strong> ${service}</p>
              <p><strong>💰 Presupuesto estimado:</strong> ${budget || "No especificado"}</p>
            </div>

            <div style="margin-top:30px;padding:20px;background:#f3f4f6;border-radius:8px;">
              <p style="font-weight:bold;">📝 Mensaje:</p>
              <p style="white-space:pre-line;">${message}</p>
            </div>

            <p style="font-size:14px;color:#6b7280;margin-top:40px;text-align:center;">
              Este mensaje fue enviado automáticamente desde el sitio web de Clivo.
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Formulario de Contacto Clivo" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 Nuevo mensaje de ${name} (${service})`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado con éxito." }),
      { status: 200 }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el correo." }),
      { status: 500 }
    );
  }
}
