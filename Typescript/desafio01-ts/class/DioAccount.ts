export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private password: string = ""

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit(valor_deposito: number): void {
    this.balance += valor_deposito
    console.log('Depósito realizado com sucesso!')
  }

  withdraw = (valor_saque: number): void => {
    if(this.validateStatus()){
      if(this.balance >= valor_saque){
        this.balance -= valor_saque
        console.log('saque realizado com sucesso!')
      }else{
        console.log('Saldo insuficiente para realizar o saque')
      }
    }else{
      console.log('Não foi possível realizar o saque')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  newPassword = (password: string): void => {
    if(this.password===""){
      this.password = password
      console.log('Senha criada com sucesso!')
    }else{
      console.log('A senha já foi criada')
    }
  }

  validateStatus = (): boolean => {
    if (this.password !== "") {
      return this.status = true
    }else{
      console.log('A senha não foi criada, por favor crie uma senha para validar a conta')
      return this.status = false
    }
    
  }
}
