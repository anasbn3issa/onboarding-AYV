import { Controller, Post, UseGuards, Request, Get, Session } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/LocalAuthGuard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return req.user;

    }

    @UseGuards(AuthenticatedGuard)
    @Get('session')
    async getAuthSession(@Session() session: Record<string, any>){
        console.log(session.id); 
        session.authenticated = true;
        return session;
        
    }
        
    
}
