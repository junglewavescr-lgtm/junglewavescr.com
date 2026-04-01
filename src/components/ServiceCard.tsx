import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  text: string;
  color: "green" | "blue";
}

const iconMap: Record<string, React.ReactNode> = {
  "pencil-ruler": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" /></svg>,
  "seedling": <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22a1 1 0 0 1-1-1v-7.07A8.002 8.002 0 0 1 4 6a1 1 0 0 1 1-1h6V3a1 1 0 1 1 2 0v2h6a1 1 0 0 1 1 1 8.002 8.002 0 0 1-7 7.93V21a1 1 0 0 1-1 1Z"/></svg>,
  "scissors": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351-.054.7-.214 1.024m0 0a2.167 2.167 0 0 1-1.488 1.09M9.384 12l1.44.833m-1.44-.833a2.166 2.166 0 0 0 .452 2.028l2.036 2.173m-3.488.235a3 3 0 1 0 5.196-3l-.012-.02M16.848 8.25l-1.536.887m1.536-.887a3 3 0 1 0 5.196-3 3 3 0 0 0-5.196 3Zm-1.536.887a2.165 2.165 0 0 0-1.083 1.839c-.005.351.054.7.214 1.024" /></svg>,
  "shower": <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 0-4 4v1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.05A10 10 0 0 0 12 20a10 10 0 0 0 7.95-9H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4V6a4 4 0 0 0-4-4Z"/></svg>,
  "bug": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152-6.135 1 1 0 0 0-.5-.866A23.97 23.97 0 0 0 12 5.25a23.97 23.97 0 0 0-6.555 1.939 1 1 0 0 0-.5.866 23.908 23.908 0 0 1-1.152 6.135A23.862 23.862 0 0 1 12 12.75Z" /></svg>,
  "mountain-sun": <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1 20.73l6.57-9.85a1 1 0 0 1 1.66 0L14.5 19l3.29-4.93a1 1 0 0 1 1.66 0L23 20.73a.5.5 0 0 1-.42.77H1.42a.5.5 0 0 1-.42-.77Z"/></svg>,
  "broom": <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 1 1 1v8.26a8 8 0 0 1 5.93 5.36l.55 1.65A1 1 0 0 1 18.53 20H5.47a1 1 0 0 1-.95-1.32l.55-1.65A8 8 0 0 1 11 11.26V3a1 1 0 0 1 1-1Z"/></svg>,
  "flask": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.456 1.456a1.125 1.125 0 0 0 0 1.591L5 19h14l1.456-1.453a1.125 1.125 0 0 0 0-1.591L19 14.5m-14 0h14" /></svg>,
  "wrench": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743Z" /></svg>,
  "calendar-check": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>,
  "lightbulb": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  "magnifying-glass": <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>,
};

export default function ServiceCard({ icon, title, text, color }: ServiceCardProps) {
  const colorClasses = color === "green"
    ? "bg-jungle-green/10 text-jungle-green"
    : "bg-pool-blue/10 text-pool-blue";

  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses}`}>
        {iconMap[icon] || <span className="text-xs">{icon}</span>}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-dark">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{text}</p>
      </div>
    </div>
  );
}
