import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { routes } from "src/app/app-routing.module"

export interface Pensamento {
    id?: number
    conteudo: string
    autoria: string
    modelo: string
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
