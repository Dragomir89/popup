import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";




@NgModule({
    imports:[FormsModule],
    declarations:[RegisterComponent],
    providers: [],
    exports: []

})

export class UsersModule {}

