import { useTranslation } from 'react-i18next';


const Footer = () => {

    const { t, i18n } = useTranslation()
    

  return (
    <footer className="bg-[#2d1b52] pt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-center">
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#f7f7e6] sm:mb-0 dark:text-[#f7f7e6]">
                    <li>
                        <a href="#home" className="hover:underline me-4 md:me-6">{t("home")}</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline me-4 md:me-6">{t("about")}</a>
                    </li>
                    <li>
                        <a href="#technologies" className="hover:underline me-4 md:me-6">{t("projectsHeader")}</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">{t("contactMe")}</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-[#f7f7e6] sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Juan Emilio Elizondo</a>. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer