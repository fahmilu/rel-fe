import Link from "next/link";
import LayoutBase from "@/components/LayoutBase";
import NotFoundIndex from "@/components/NotFound";

const NotFound = async ({ params }) => {
    const param = await params;
    const locale = param?.locale || "en";
    console.log(params);
    // const locale = "en";
    return (
        // <LayoutBase locale={locale} isNoFooter={true}>
            <NotFoundIndex />
        // </LayoutBase>
    );
}

export default NotFound;