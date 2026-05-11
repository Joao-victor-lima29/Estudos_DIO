import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const Company = new CompanyAccount('DIO', 123456)
const People = new PeopleAccount(123456789, 'João', 654321)
const Vip = new VipAccount('Maria', 987654)

Company.getLoan(1000);
Company.newPassword('123456')
Company.getLoan(1000);

People.newPassword('654321')
People.deposit(500)
People.getBalance()
People.withdraw(200)
People.getBalance()

Vip.newPassword('987654')
Vip.deposit(1000)
Vip.getBalance()
Vip.withdraw(500)
Vip.getBalance()