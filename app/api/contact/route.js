import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { fname, lname, phone, email, country, message } = body;


        if (!fname || !lname || !phone || !email || !message) {
            return NextResponse.json(
                { message: "All required fields must be filled." },
                { status: 400 }
            );
        }


        const BREVO_API_KEY = process.env.BREVO_API_KEY;
        console.log(BREVO_API_KEY);
        console.log("KEY LENGTH:", BREVO_API_KEY.length);

        if (!BREVO_API_KEY) {
            console.error("❌ BREVO_API_KEY is missing in environment variables");
            return NextResponse.json(
                { message: "Email service not configured." },
                { status: 500 }
            );
        }

        console.log("✅ BREVO KEY Loaded");


        //  ADMIN EMAIL

        const adminResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": BREVO_API_KEY,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    sender: {
                        name: "Oort E Cloud",
                        email: "yulantodevelopers@gmail.com",
                    },
                    to: [{ email: "yulantodevelopers@gmail.com" }],
                    replyTo: {
                        email,
                        name: `${fname} ${lname}`,
                    },
                    subject: "New Enquiry from Oort E Cloud",
                    htmlContent: `
            <div style="margin:0; padding:0; background-color:#f4f6f9; font-family: Arial, Helvetica, sans-serif;">
  
  <table align="center" width="100%" cellpadding="0" cellspacing="0" 
         style="max-width:700px; margin:auto; background:#ffffff; border:1px solid #e5e5e5;">
    
    
    <tr>
      <td style="background-color:#0d6efd; padding:18px; text-align:center; color:#ffffff;">
        <h2 style="margin:0;">📩 New Enquiry Received</h2>
      </td>
    </tr>

    
    <tr>
      <td style="padding:25px;">
        
        <table width="100%" cellpadding="8" cellspacing="0" 
               style="border-collapse:collapse; font-size:14px;">

          <tr>
            <td style="background:#f9f9f9; width:150px;"><strong>Name</strong></td>
            <td style="border-bottom:1px solid #eee;">${fname} ${lname}</td>
          </tr>

          <tr>
            <td style="background:#f9f9f9;"><strong>Email</strong></td>
            <td style="border-bottom:1px solid #eee;">
              <a href="mailto:${email}" style="color:#0d6efd; text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#f9f9f9;"><strong>Phone</strong></td>
            <td style="border-bottom:1px solid #eee;">
              <a href="tel:${phone}" style="color:#0d6efd; text-decoration:none;">
                ${phone}
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#f9f9f9;"><strong>Country</strong></td>
            <td style="border-bottom:1px solid #eee;">
              ${country || "-"}
            </td>
          </tr>

          <tr>
            <td style="background:#f9f9f9; vertical-align:top;"><strong>Message</strong></td>
            <td style="border-bottom:1px solid #eee; line-height:1.6;">
              ${message}
            </td>
          </tr>

        </table>

       
        <div style="margin-top:25px; text-align:center;">
          <a href="mailto:${email}" 
             style="background-color:#198754; color:#ffffff; text-decoration:none; padding:10px 20px; border-radius:4px; font-size:14px; margin-right:10px; display:inline-block;">
             Reply to Customer
          </a>

          <a href="tel:${phone}" 
             style="background-color:#0d6efd; color:#ffffff; text-decoration:none; padding:10px 20px; border-radius:4px; font-size:14px; display:inline-block;">
             Call Customer
          </a>
        </div>

      </td>
    </tr>

   
   

  </table>
</div>

          `,
                }),
            }
        );

        const adminData = await adminResponse.json();

        if (!adminResponse.ok) {
            console.error("❌ Admin Email Failed:", adminData);
            return NextResponse.json(
                { message: "Failed to send admin email." },
                { status: 500 }
            );
        }


        const clientResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": BREVO_API_KEY,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    sender: {
                        name: "Oort E Cloud",
                        email: "yulantodevelopers@gmail.com",
                    },
                    to: [{ email, name: fname }],
                    subject: "Thank You for Contacting Oort E Cloud",
                    htmlContent: `
           <div style="margin:0; padding:0; background-color:rgb(218, 220, 224); font-family: Arial, Helvetica, sans-serif;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border:1px solid #e5e5e5;">
    
    
    <tr>
      <td style="background-color:#0d6efd; padding:20px; text-align:center;">
        <img src="https://oortecloud.com/assets/img/logo/logo-3.png" 
             alt="Oorte Cloud Logo" 
             style="max-width:180px; height:auto;" />
      </td>
    </tr>

   
    <tr>
      <td style="padding:30px 25px; color:#333;">
        <h2 style="margin-top:0; color:#0d6efd;">Thank You, ${fname}!</h2>
        
        <p style="font-size:15px; line-height:1.6;">
          We have received your enquiry successfully. Our team will review your request 
          and contact you shortly.
        </p>

        <p style="font-size:15px; line-height:1.6;">
          If your enquiry is urgent, feel free to reach out to us directly.
        </p>

        
        <div style="text-align:center; margin:30px 0;">
          <a href="https://oortecloud.com" 
             style="background-color:#0d6efd; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:4px; font-size:14px; display:inline-block;">
             Visit Our Website
          </a>
        </div>
      </td>
    </tr>

    
    <tr>
      <td style="padding:0 25px;">
        <hr style="border:none; border-top:1px solid #eee;">
      </td>
    </tr>

    
    <tr>
      <td style="padding:20px 25px; font-size:13px; color:#777; line-height:1.6;">
        <strong>Oorte Cloud</strong><br/>
        #170, Sai Kranthi,<br/>
        Near Siddivinayaka Temple,<br/>
        Panduranga Nagar,<br/>
        Bengaluru - 560076
        <br/><br/>
        <span style="color:#999;">
          This is an automated email. Please do not reply.
        </span>
      </td>
    </tr>

  </table>
</div>

          `,
                }),
            }
        );

        const clientData = await clientResponse.json();

        if (!clientResponse.ok) {
            console.error("❌ Client Email Failed:", clientData);
            return NextResponse.json(
                { message: "Failed to send confirmation email." },
                { status: 500 }
            );
        }


        return NextResponse.json(
            { message: "Enquiry submitted successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ CONTACT API ERROR:", error);
        return NextResponse.json(
            { message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}