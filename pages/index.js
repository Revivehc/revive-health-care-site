
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const servicos = [
  {
    title: "Fisioterapia Hospitalar / Hospital Physiotherapy",
    desc: "Equipe especializada, protocolos atualizados e foco na recuperação funcional do paciente internado."
  },
  {
    title: "Nutrição Hospitalar / Hospital Nutrition",
    desc: "Planejamento nutricional com foco em suporte metabólico e recuperação clínica."
  },
  {
    title: "Fonoaudiologia Hospitalar / Hospital Speech Therapy",
    desc: "Reabilitação de distúrbios da deglutição, comunicação e voz no ambiente hospitalar."
  },
  {
    title: "Home Care Multiprofissional / Multidisciplinary Home Care",
    desc: "Equipe integrada atuando no domicílio com fisioterapia, nutrição, fonoaudiologia, TO e psicologia."
  },
  {
    title: "Gestão de Indicadores / Quality Indicators Management",
    desc: "Coleta, análise e apresentação de dados para tomada de decisão e melhoria contínua."
  },
  {
    title: "Educação Continuada / Continuing Education",
    desc: "Capacitação baseada em evidências, indicadores e protocolos assistenciais."
  }
];

export default function Home() {
  return (
    <main className="p-8 space-y-10 bg-gradient-to-b from-white via-sky-50 to-blue-100 min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur shadow-md z-50 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-800">Revive Health Care</h1>
        <nav className="space-x-4">
          <Link href="#services" className="text-blue-600 hover:underline">Serviços</Link>
          <Link href="#courses" className="text-blue-600 hover:underline">Cursos</Link>
          <Link href="#about" className="text-blue-600 hover:underline">Sobre</Link>
          <Link href="#contact" className="text-blue-600 hover:underline">Contato</Link>
        </nav>
      </header>

      <section className="pt-24 text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 drop-shadow-md">Revive Health Care</h2>
        <p className="mt-4 text-xl text-gray-700">Gestão profissional em saúde com foco em excelência, capacitação e inovação.</p>
        <p className="mt-1 text-gray-500 italic">Professional health management focused on excellence, training, and innovation.</p>
      </section>

      <section id="services" className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-semibold text-blue-600 border-b pb-2">Nossos Serviços / Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-800">
          {servicos.map((servico, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-cyan-700">{servico.title}</h3>
              <p className="mt-2">{servico.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="bg-blue-100 shadow-inner rounded-2xl p-6 border-l-4 border-blue-600">
        <h2 className="text-3xl font-semibold text-blue-700">Cursos / Courses</h2>
        <p className="mt-2 text-gray-800">Capacitações presenciais e online para profissionais da saúde:</p>
        <ul className="list-none mt-4 space-y-3">
          <li><Link href="/curso-fisioterapia-uti" className="flex items-center text-blue-700 hover:underline"><ChevronRight size={20} />Fisioterapia em Terapia Intensiva</Link></li>
          <li><Link href="/curso-ventilacao-mecanica" className="flex items-center text-blue-700 hover:underline"><ChevronRight size={20} />Ventilação Mecânica</Link></li>
          <li><Link href="/curso-home-care" className="flex items-center text-blue-700 hover:underline"><ChevronRight size={20} />Fisioterapia em Home Care</Link></li>
        </ul>
      </section>

      <section id="about" className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-semibold text-blue-600 border-b pb-2">Nossa História / Our Story</h2>
        <p className="mt-4 text-gray-800 leading-relaxed">
          A Revive Health Care é fruto de anos de experiência em gestão de equipe. Nosso sócio fundador, Ederson Reis,
          tem mais de uma década de atuação em terapia intensiva e já atuou em hospitais de referência em Brasília.
          Desde 2018, lidera equipes multidisciplinares na UTI DOMED, promovendo qualidade assistencial com eficiência.
        </p>
      </section>

      <section id="contact" className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-semibold text-blue-600 border-b pb-2">Contato / Contact</h2>
        <p className="mt-4 text-gray-800">Telefone / Phone: (61) 9 9280-6543</p>
        <p className="text-gray-800">Email: adm01.revive@gmail.com</p>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Seu nome / Your name" className="w-full border border-gray-300 p-3 rounded-xl shadow-sm" />
          <input type="email" placeholder="Seu email / Your email" className="w-full border border-gray-300 p-3 rounded-xl shadow-sm" />
          <textarea placeholder="Mensagem / Message" className="w-full border border-gray-300 p-3 rounded-xl shadow-sm" rows="4"></textarea>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 shadow-md">Enviar / Send</button>
        </form>
      </section>
    </main>
  );
}
