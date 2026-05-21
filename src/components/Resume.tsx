import {
  Briefcase,
  ChevronRight,
  Code2,
  Github,
  Globe2,
  GraduationCap,
  Hash,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

export default function Resume() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans selection:bg-[#2383e2]/30">
      <div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 lg:px-10 pt-5 sm:pt-6 xl:pt-10 pb-24 lg:pb-32 relative">
        <div className="absolute top-5 right-5 sm:right-8 lg:right-10 xl:fixed xl:top-4 xl:right-4 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-white/90 backdrop-blur text-[#37352f] text-xs font-medium px-3 py-1.5 rounded-[4px] shadow-sm hover:bg-white transition-colors border border-[#37352f]/10"
          >
            {language === 'ru' ? 'English' : 'Русский'}
          </button>
        </div>

        <header className="mb-10 lg:mb-14 pt-14 sm:pt-16 xl:pt-0">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-10 xl:gap-14 lg:items-start">
            <div className="min-w-0">
              <h1 className="text-4xl md:text-[40px] lg:text-[46px] font-bold text-[#37352f] mb-8 tracking-tight font-sans pr-16 sm:pr-20 xl:pr-0">
                {t.personal.name}
              </h1>

              <div className="flex flex-col gap-2 text-[15px] border-b lg:border-b-0 border-[#37352f]/10 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                  <div className="text-[#37352f]/50 w-32 shrink-0 flex items-center gap-1.5">
                    <Hash className="w-4 h-4" />
                    Info
                  </div>
                  <div className="text-[#37352f] max-w-[68ch]">{t.personal.details}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                  <div className="text-[#37352f]/50 w-32 shrink-0 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Location
                  </div>
                  <div className="text-[#37352f]">{t.personal.residence}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start">
                  <div className="text-[#37352f]/50 w-32 shrink-0 flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    Position
                  </div>
                  <div className="min-w-0">
                    <span className="bg-[#f0f0f0] text-[#37352f] rounded-[3px] px-1.5 py-0.5 mr-2 inline-block">
                      {t.position.title}
                    </span>
                    <span className="text-[#37352f]/70 inline-block">
                      —
                      {' '}
                      {t.position.salary}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start">
                  <div className="text-[#37352f]/50 w-32 shrink-0 flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-4 h-4" />
                    Contact
                  </div>
                  <div className="flex flex-col gap-2 text-[#37352f] min-w-0">
                    <div>
                      {t.contacts.phone}
                      {' '}
                      <span className="text-[#37352f]/50 text-sm">
                        (
                        {t.contacts.phonePref}
                        )
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3">
                      <a
                        href={`https://t.me/${t.contacts.telegram.replace('@', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 hover:bg-[#37352f]/5 px-1 -mx-1 rounded transition-colors border-b border-[#37352f]/20 hover:border-[#37352f]/50"
                      >
                        <Send className="w-3.5 h-3.5" />
                        {t.contacts.telegram}
                      </a>

                      <a
                        href={`mailto:${t.contacts.email}`}
                        className="flex items-center gap-1.5 hover:bg-[#37352f]/5 px-1 -mx-1 rounded transition-colors border-b border-[#37352f]/20 hover:border-[#37352f]/50 break-all"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        {t.contacts.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                  <div className="text-[#37352f]/50 w-32 shrink-0 flex items-center gap-1.5 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                    Links
                  </div>
                  <div>
                    <a
                      href={`https://github.com/${t.contacts.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:bg-[#37352f]/5 px-1 -mx-1 rounded transition-colors border-b border-[#37352f]/20 hover:border-[#37352f]/50 inline-flex"
                    >
                      <Github className="w-3.5 h-3.5" />
                      github.com/
                      {t.contacts.github}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <aside className="bg-[#f1f1ef] px-4 py-4 rounded-[4px] text-[15px] leading-relaxed lg:sticky lg:top-8 border border-[#37352f]/6">
              <div className="w-full min-w-0 pl-[2px] sm:pl-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-6 text-[#37352f]">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#37352f]/50">
                      {t.position.specializationsTitle.replace(':', '')}
                    </span>
                    <span className="break-words text-pretty">{t.position.specializations}</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#37352f]/50">
                      {t.position.employmentTitle.replace(':', '')}
                    </span>
                    <span className="break-words text-pretty">{t.position.employment}</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#37352f]/50">
                      {t.position.formatTitle.replace(':', '')}
                    </span>
                    <span className="break-words text-pretty">{t.position.format}</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#37352f]/50">
                      {t.personal.citizenshipTitle}
                    </span>
                    <span className="break-words text-pretty">{t.personal.citizenship}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#37352f]/10">
                  <span className="text-[#37352f]/70 text-[14px] flex items-center gap-1.5 break-words text-pretty">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                    {t.personal.relocate}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6 group cursor-default">
            <ChevronRight className="w-5 h-5 text-[#37352f] transition-transform rounded" />
            <h2 className="text-xl md:text-2xl font-bold">{t.experienceTitle}</h2>
          </div>

          <div className="pl-5 md:pl-6 space-y-12 lg:space-y-14 border-l-2 border-[#37352f]/5 ml-2">
            {t.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[25px] md:-left-[29px] top-1.5 w-3 h-3 bg-white border-2 border-[#37352f]/20 rounded-full" />

                <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
                  <div className="lg:sticky lg:top-8 self-start">
                    <h3 className="text-[17px] font-bold text-[#37352f] flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {exp.company}
                      <span className="text-[14px] font-normal text-[#37352f]/50 px-1.5 rounded-sm bg-[#37352f]/5">
                        {exp.role}
                      </span>
                    </h3>

                    <div className="text-[15px] text-[#37352f]/50 mt-2 mb-3 flex flex-wrap gap-2 items-center">
                      <span>{exp.period}</span>
                      <span className="text-[10px]">•</span>
                      <span>{exp.duration}</span>
                      <span className="text-[10px]">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <div className="text-[14px] text-[#37352f]/70 leading-relaxed bg-[#f9f9f8] p-3 rounded border border-[#37352f]/10">
                      {exp.industry}
                      {' '}
                      /
                      {exp.companyDesc}
                    </div>
                  </div>

                  <div className="space-y-6 min-w-0">
                    {exp.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="group bg-white rounded-[4px] lg:px-1"
                      >
                        <div className="font-semibold text-[#37352f] mb-1.5 text-[15px] flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#37352f]/40 shrink-0" />
                          <span>{proj.name}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {proj.stack.split(', ').map((stk, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-[#f0f0f0] text-[#37352f] text-[13px] rounded-[3px] px-1.5 py-0.5 leading-tight"
                            >
                              {stk}
                            </span>
                          ))}
                        </div>

                        <p className="text-[15px] text-[#37352f] mb-2 leading-relaxed max-w-[70ch]">
                          {proj.description}
                        </p>

                        <ul className="space-y-1.5 flex flex-col gap-1 max-w-[78ch]">
                          {proj.achievements.map((achiev, aIdx) => (
                            <li
                              key={aIdx}
                              className="text-[15px] text-[#37352f]/80 leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-[#37352f]/30 mt-1 select-none">•</span>
                              <span>{achiev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#37352f]/10 mb-8" />

        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 group cursor-default">
            <ChevronRight className="w-5 h-5 text-[#37352f] transition-transform rounded" />
            <h2 className="text-xl font-bold">{t.additional.title}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {t.additional.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-[4px] border border-[#37352f]/10 bg-[#fafaf9] px-4 py-4"
              >
                <span className="font-semibold text-[#37352f] mb-1">
                  {item.name.replace(':', '')}
                </span>
                <span className="text-[15px] leading-relaxed text-[#37352f]/80 max-w-[62ch]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#37352f]/10 mb-8" />

        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:gap-16 items-stretch">
          <section className="min-w-0 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4 group cursor-default">
              <ChevronRight className="w-5 h-5 text-[#37352f] transition-transform rounded" />
              <h2 className="text-xl font-bold">{t.education.title}</h2>
            </div>

            <div className="rounded-[4px] border border-[#37352f]/10 bg-[#fafaf9] px-4 sm:px-5 py-4 sm:py-5 h-full flex flex-col">
              <div className="flex flex-wrap items-center gap-2 text-[15px] mb-2 min-w-0">
                <GraduationCap className="w-4 h-4 text-[#37352f]/50 shrink-0" />
                <span className="font-medium break-words">{t.education.level}</span>
                <span className="text-[#37352f]/50 bg-[#37352f]/5 px-1.5 rounded-sm text-sm shrink-0">
                  {t.education.year}
                </span>
              </div>

              <div className="text-[14px] font-medium text-[#37352f] mb-1 leading-snug max-w-[52ch] break-words text-pretty min-w-0">
                {t.education.institution}
              </div>

              <div className="text-[14px] text-[#37352f]/60 leading-snug max-w-[52ch] break-words text-pretty min-w-0">
                {t.education.faculty}
              </div>
            </div>
          </section>

          <section className="min-w-0 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4 group cursor-default">
              <ChevronRight className="w-5 h-5 text-[#37352f] transition-transform rounded" />
              <h2 className="text-xl font-bold">{t.skills.title}</h2>
            </div>

            <div className="grid gap-4 md:gap-5 xl:grid-cols-[260px_minmax(0,1fr)] xl:items-stretch h-full">
              <div className="rounded-[4px] border border-[#37352f]/10 bg-[#fafaf9] px-4 sm:px-5 py-4 sm:py-5 h-full flex flex-col min-w-0">
                <h3 className="text-[13px] font-semibold text-[#37352f]/50 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 shrink-0" />
                  {t.skills.languagesTitle}
                </h3>

                <ul className="text-[14px] text-[#37352f]/80 space-y-1 border-l-2 border-[#37352f]/10 pl-3 min-w-0">
                  {t.skills.languages.map((lang, idx) => (
                    <li key={idx} className="break-words text-pretty">{lang}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[4px] border border-[#37352f]/10 bg-[#fafaf9] px-4 sm:px-5 py-4 sm:py-5 h-full flex flex-col min-w-0">
                <h3 className="text-[13px] font-semibold text-[#37352f]/50 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 shrink-0" />
                  {t.skills.stackTitle}
                </h3>

                <div className="flex flex-wrap gap-1.5 content-start">
                  {t.skills.stack.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#f0f0f0] text-[#37352f] text-[13px] rounded-[3px] px-1.5 py-0.5 leading-tight hover:bg-[#e4e4e4] transition-colors cursor-default break-words max-w-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#37352f]/20" />
        </div>
      </div>
    </div>
  )
}
