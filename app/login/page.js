// /app/login/page.js
import LoginForm from '../../components/LoginForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </div>
  );
}