import FooterClient from "./footerClient";
interface Service {
  service: string;
  navigateTo: string;
}

interface FooterServicesItem {
  id: string;
  service_title: string;
  services: Service[];
}

interface FooterConfig {
  footer_heading: string;
  creator_name: string;
  link: string;
  footerServicesItems: FooterServicesItem[];
}

async function getFooterConfigData(): Promise<FooterConfig> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/config/footerConfig.json`,
    {
      cache: 'force-cache', // ✅ cached forever (until rebuild)
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch Footer config');
  }
  return res.json();
}


async function Footer() {
  
  const footerConfigData =  await getFooterConfigData();

  return (
    <div>
      <FooterClient footerConfig={footerConfigData}/>
    </div>
  )
}

export default Footer
