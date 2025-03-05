import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthGuard
  ],
})
export class CoreModule { }
