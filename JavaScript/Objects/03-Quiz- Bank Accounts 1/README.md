<h3>Directions:</h3>

Using the given object:

<code>var savingsAccount = {</code><br/>
<code>  balance: 1000,</code><br/>
<code>  interestRatePercent: 1,</code><br/>
<code>  deposit: function addMoney(amount) {</code><br/>
<code>    if (amount > 0) {</code><br/>
<code>      savingsAccount.balance += amount;</code><br/>
<code>    }</code><br/>
<code>  },</code><br/>
<code>  withdraw: function removeMoney(amount) {</code><br/>
<code>    var verifyBalance = savingsAccount.balance - amount;</code><br/>
<code>    if (amount > 0 && verifyBalance >= 0) {</code><br/>
<code>      savingsAccount.balance -= amount;</code><br/>
<code>    }</code><br/>
<code>  }</code><br/>
<code>};</code><br/>

add a printAccountSummary() method that returns the following account message:

<code>Welcome!</code><br/>
<code>Your balance is currently $1000 and your interest rate is 1%.</code>
