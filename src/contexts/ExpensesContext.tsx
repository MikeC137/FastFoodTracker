import { createContext, useContext, useState, type ReactNode } from "react";
import { type Expense } from "@/types/Expense";

interface ExpensesContextType {
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  // updateExpense
  getTotalSpent: () => number;
  // getExpensesByCategory
  // getExpensesByMonth
}

const ExpensesContext = createContext<ExpensesContextType | undefined>(
  undefined
);

function ExpensesProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function addExpense(expense: Expense) {
    setExpenses((prev) => {
      const next = [...prev, expense];
      localStorage.setItem("expenses", JSON.stringify(next));
      return next;
    });
  }

  function removeExpense(id: string) {
    setExpenses(() => {
      const next = expenses.filter((expense) => expense.id != id);
      localStorage.setItem("expenses", JSON.stringify(next));
      return next;
    });
  }

  function getTotalSpent() {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  }

  return (
    <ExpensesContext.Provider
      value={{ addExpense, removeExpense, getTotalSpent }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

function useExpenses() {
  const context = useContext(ExpensesContext);
  if (context === undefined) {
    throw new Error("useExpenses must be used within an ExpensesProvider");
  }
  return context;
}

export { ExpensesProvider, useExpenses };
