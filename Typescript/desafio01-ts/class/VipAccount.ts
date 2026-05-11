import {DioAccount} from './DioAccount'

export class VipAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
 deposit = (valor_deposito: number): void => {
    super.deposit((valor_deposito+ 10))
    console.log('Depósito realizado com sucesso!')
  }
}