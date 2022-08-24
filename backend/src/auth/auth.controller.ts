import { Controller, Post, UseGuards, Request, Get, Session, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/LocalAuthGuard';

@Controller('auth')
export class AuthController {
    constructor(
       private authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('session')
    async getAuthSession(@Session() session: Record<string, any>){
        console.log(session.id); 
        session.authenticated = true;
        return session;
        
    }
        
    
}
