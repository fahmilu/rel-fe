import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";

const namespaces = ['common'];
export default async function LayoutBase({ children, locale }) {
    const { t, resources } = await initTranslations(locale, namespaces, null, null);

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </TranslationsProvider>
    );
}