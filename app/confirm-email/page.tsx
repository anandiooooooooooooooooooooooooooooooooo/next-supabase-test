export default function ConfirmEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-orange-500 mb-4">
          Konfirmasi Email Diperlukan
        </h1>
        <p className="text-gray-700">
          Kami telah mengirimkan link verifikasi ke email Anda. Silakan cek
          inbox (atau folder spam) dan klik link tersebut untuk mengaktifkan
          akun Anda.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Setelah dikonfirmasi, Anda dapat login ke dalam aplikasi.
        </p>
      </div>
    </div>
  );
}
