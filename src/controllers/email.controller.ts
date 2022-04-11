import { Request, Response } from 'express';
import emailService from '../services/email.service';

class EmailController{
  async sendEmail(request: Request, response: Response){
    const { from, to, subject, content, phone } = request.body;
    
    // tirei o to pra enviar só pra mim devido a tretas de segurança
    const result = await emailService.sendEmail(subject, content, from, undefined, phone);

    if(result){
      return response.status(200).json({message: 'E-mail enviado com sucesso!'});
    } else {
      return response.status(500).json({message: 'Erro ao enviar e-mail :('});
    }
  }
}

export default new EmailController();