import { useState, useEffect } from 'react'
import './App.css'

interface Loan {
  id: string
  colleagueName: string
  amount: number
  date: string
  description: string
  isRepaid: boolean
}

function App() {
  const [loans, setLoans] = useState<Loan[]>([])
  const [formData, setFormData] = useState({
    colleagueName: '',
    amount: '',
    description: ''
  })

  // Load loans from localStorage on component mount
  useEffect(() => {
    const savedLoans = localStorage.getItem('colleague-loans')
    if (savedLoans) {
      setLoans(JSON.parse(savedLoans))
    }
  }, [])

  // Save loans to localStorage whenever loans change
  useEffect(() => {
    localStorage.setItem('colleague-loans', JSON.stringify(loans))
  }, [loans])

  const addLoan = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.colleagueName || !formData.amount) return

    const newLoan: Loan = {
      id: Date.now().toString(),
      colleagueName: formData.colleagueName,
      amount: parseFloat(formData.amount),
      date: new Date().toLocaleDateString(),
      description: formData.description,
      isRepaid: false
    }

    setLoans([...loans, newLoan])
    setFormData({ colleagueName: '', amount: '', description: '' })
  }

  const markAsRepaid = (id: string) => {
    setLoans(loans.map(loan => 
      loan.id === id ? { ...loan, isRepaid: true } : loan
    ))
  }

  const deleteLoan = (id: string) => {
    setLoans(loans.filter(loan => loan.id !== id))
  }

  const totalLent = loans.filter(loan => !loan.isRepaid).reduce((sum, loan) => sum + loan.amount, 0)
  const totalRepaid = loans.filter(loan => loan.isRepaid).reduce((sum, loan) => sum + loan.amount, 0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Colleague Loan Tracker</h1>
        <div className="summary">
          <div className="summary-item">
            <span className="label">Outstanding:</span>
            <span className="amount outstanding">${totalLent.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span className="label">Repaid:</span>
            <span className="amount repaid">${totalRepaid.toFixed(2)}</span>
          </div>
        </div>
      </header>

      <main>
        <section className="add-loan-form">
          <h2>Add New Loan</h2>
          <form onSubmit={addLoan}>
            <div className="form-group">
              <label htmlFor="colleagueName">Colleague Name:</label>
              <input
                type="text"
                id="colleagueName"
                value={formData.colleagueName}
                onChange={(e) => setFormData({...formData, colleagueName: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Amount ($):</label>
              <input
                type="number"
                id="amount"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description (optional):</label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="e.g., lunch, coffee, taxi fare"
              />
            </div>
            
            <button type="submit" className="btn-primary">Add Loan</button>
          </form>
        </section>

        <section className="loans-list">
          <h2>Loan History</h2>
          {loans.length === 0 ? (
            <p className="no-loans">No loans recorded yet. Add your first loan above!</p>
          ) : (
            <div className="loans-grid">
              {loans.map(loan => (
                <div key={loan.id} className={`loan-card ${loan.isRepaid ? 'repaid' : 'outstanding'}`}>
                  <div className="loan-header">
                    <h3>{loan.colleagueName}</h3>
                    <span className="amount">${loan.amount.toFixed(2)}</span>
                  </div>
                  
                  <div className="loan-details">
                    <p className="date">Date: {loan.date}</p>
                    {loan.description && <p className="description">{loan.description}</p>}
                    <span className={`status ${loan.isRepaid ? 'repaid' : 'outstanding'}`}>
                      {loan.isRepaid ? '✅ Repaid' : '⏳ Outstanding'}
                    </span>
                  </div>
                  
                  <div className="loan-actions">
                    {!loan.isRepaid && (
                      <button 
                        onClick={() => markAsRepaid(loan.id)}
                        className="btn-success"
                      >
                        Mark as Repaid
                      </button>
                    )}
                    <button 
                      onClick={() => deleteLoan(loan.id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
