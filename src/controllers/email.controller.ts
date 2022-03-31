import { Request, Response } from 'express';
import emailService from '../services/email.service';

class EmailController{
  async sendEmail(request: Request, response: Response){
    const { email, content } = request.body;
    
    const result = await emailService.sendEmail(content, email);

    if(result){
      return response.status(200).json({message: 'E-mail enviado com sucesso!'});
    } else {
      return response.status(500).json({message: 'Erro ao enviar e-mail :('});
    }
  }
}

export default new EmailController();