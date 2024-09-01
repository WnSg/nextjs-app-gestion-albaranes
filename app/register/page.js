// /app/register/page.js
import RegisterForm from '../../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <RegisterForm />
      </div>
    </div>
  );
}