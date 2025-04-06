
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">Revive Health Care</h1>
        <p className="mt-2 text-lg text-gray-700">
          Gestão profissional em saúde com foco em excelência, capacitação e inovação.
        </p>
        <p className="mt-1 text-gray-500 italic">Professional health management focused on excellence, training, and innovation.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600">Nossos Serviços / Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-800">
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Fisioterapia Hospitalar / Hospital Physiotherapy</h3>
            <p className="mt-2">Equipe especializada, protocolos atualizados e foco na recuperação funcional do paciente internado.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Nutrição Hospitalar / Hospital Nutrition</h3>
            <p className="mt-2">Planejamento nutricional com foco em suporte metabólico e recuperação clínica.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Fonoaudiologia Hospitalar / Hospital Speech Therapy</h3>
            <p className="mt-2">Reabilitação de distúrbios da deglutição, comunicação e voz no ambiente hospitalar.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Home Care Multiprofissional / Multidisciplinary Home Care</h3>
            <p className="mt-2">Equipe integrada atuando no domicílio com fisioterapia, nutrição, fonoaudiologia, TO e psicologia.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Gestão de Indicadores / Quality Indicators Management</h3>
            <p className="mt-2">Coleta, análise e apresentação de dados para tomada de decisão e melhoria contínua.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Educação Continuada / Continuing Education</h3>
            <p className="mt-2">Capacitação baseada em evidências, indicadores e protocolos assistenciais.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700">Cursos / Courses</h3>
            <p className="mt-2">Capacitações presenciais e online para profissionais da saúde:</p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li><Link href="/curso-fisioterapia-uti" className="text-blue-600 underline">Fisioterapia em Terapia Intensiva</Link></li>
              <li><Link href="/curso-ventilacao-mecanica" className="text-blue-600 underline">Ventilação Mecânica</Link></li>
              <li><Link href="/curso-home-care" className="text-blue-600 underline">Fisioterapia em Home Care</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600">Nossa História / Our Story</h2>
        <p className="mt-2 text-gray-800">
          A Revive Health Care é fruto de anos de experiência em gestão de equipe. Nosso sócio fundador, Ederson Reis,
          tem mais de uma década de atuação em terapia intensiva e já atuou em hospitais de referência em Brasília.
          Desde 2018, lidera equipes multidisciplinares na UTI DOMED, promovendo qualidade assistencial com eficiência.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600">Contato / Contact</h2>
        <p className="mt-2 text-gray-800">Telefone / Phone: (61) 9 9280-6543</p>
        <p className="text-gray-800">Email: adm01.revive@gmail.com</p>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Seu nome / Your name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Seu email / Your email" className="w-full border p-2 rounded" />
          <textarea placeholder="Mensagem / Message" className="w-full border p-2 rounded" rows="4"></textarea>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Enviar / Send</button>
        </form>
      </section>
    </main>
  );
}
