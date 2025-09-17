/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require("aws-sdk");
const ses = new aws.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  console.log('Lambda function started', JSON.stringify(event, null, 2));
  
  try {
    for (const streamedItem of event.Records) {
      if (streamedItem.eventName === "INSERT") {
        console.log('Processing INSERT event');
        
        // Pull off items from stream
        const candidateName = streamedItem.dynamodb.NewImage.name.S;
        const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
        const candidateMessage = streamedItem.dynamodb.NewImage.message.S;
        
        console.log('Contact form data:', {
          name: candidateName,
          email: candidateEmail,
          message: candidateMessage.substring(0, 100) + '...'
        });
        

        
        const emailParams = {
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: `Ailen Hair Stylist <noreply@ailenhairstylist.com>`,
          Message: {
            Subject: { 
              Data: `[Consulta Web] ${candidateName} - ailenhairstylist.com`
            },
            Body: {
              Text: {
                Data: `NUEVA CONSULTA DESDE AILENHAIRSTYLIST.COM

Cliente: ${candidateName}
Correo: ${candidateEmail}

Mensaje:
${candidateMessage}

---
Consulta recibida desde: https://ailenhairstylist.com
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/New_York' })}

Para responder, simplemente contesta este correo.`,
              },
              Html: {
                Data: `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <title>Nueva Consulta - Ailen Hair Stylist</title>
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">💇‍♀️ Nueva Consulta</h1>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">ailenhairstylist.com</p>
                  </div>
                  
                  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <h2 style="color: #495057; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Información del Cliente</h2>
                      <p><strong>👤 Nombre:</strong> ${candidateName}</p>
                      <p><strong>📧 Correo:</strong> <a href="mailto:${candidateEmail}" style="color: #667eea;">${candidateEmail}</a></p>
                    </div>
                    
                    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <h3 style="color: #495057; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">💬 Mensaje</h3>
                      <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px;">
                        ${candidateMessage.replace(/\n/g, '<br>')}
                      </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px; text-align: center;">
                      <p style="margin: 0; color: #1565c0; font-size: 14px;">
                        📅 Recibido: ${new Date().toLocaleString('es-ES', { timeZone: 'America/New_York' })}<br>
                        🌐 Desde: <a href="https://ailenhairstylist.com" style="color: #1565c0;">ailenhairstylist.com</a><br>
                        💡 Para responder, simplemente contesta este correo
                      </p>
                    </div>
                  </div>
                </body>
                </html>
                `
              }
            },
          },
          ReplyToAddresses: [candidateEmail],
          Tags: [
            {
              Name: 'Source',
              Value: 'ContactForm'
            },
            {
              Name: 'Website',
              Value: 'ailenhairstylist.com'
            }
          ]
        };
        
        console.log('Sending email with params:', JSON.stringify(emailParams, null, 2));
        
        const result = await ses.sendEmail(emailParams).promise();
        console.log('Email sent successfully:', result.MessageId);
      }
    }
    
    console.log('Lambda function completed successfully');
    return { status: "done" };
    
  } catch (error) {
    console.error('Error in Lambda function:', error);
    throw error;
  }
};
