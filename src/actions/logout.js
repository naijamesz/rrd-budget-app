// react router dom imports
import { redirect } from 'react-router-dom';

// Library react-toastify
import { toast } from 'react-toastify';

// from helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete user
  deleteItem({ key: 'username' });
  deleteItem({ key: 'budgets' });
  deleteItem({ key: 'expenses' });
  toast.success("You've deleted your account!");

  return redirect('/');
}
