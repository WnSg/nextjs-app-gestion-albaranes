// /app/verify/page.js
import VerificationForm from '../../components/VerificationForm';

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <VerificationForm />
      </div>
    </div>
  );
}