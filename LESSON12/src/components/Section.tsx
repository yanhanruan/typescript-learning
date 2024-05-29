import  { ReactNode } from "react";

// React 16, obsolete , not supported in React18
// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}