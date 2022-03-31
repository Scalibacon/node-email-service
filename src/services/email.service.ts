import nodemailer from 'nodemailer';

class EmailService{
  async sendEmail(content: string, email: string): Promise<boolean>{
    try {
      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });
  
      const mailOptions = {
        from: process.env.EMAIL,
        to: 'matheusferreira_mfn@hotmail.com',
        subject: 'E-mail enviado do Portfas do Tetheus',
        text: `${content} \nDe: ${email}`
      }
  
      return new Promise( (resolve: Function, reject: Function) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if(error){
            console.log('Erro ao enviar e-mail => ', error);
            return resolve(false);;
          }
    
          console.log('E-mail enviado com sucesso => ', info.response);
          return resolve(true);
        });
      });  
    } catch(err){
      if(err instanceof Error)
        console.log('Error trying to send e-mail =>> ' + err.message);
      return false;
    }      
  }
}

export default new EmailService();