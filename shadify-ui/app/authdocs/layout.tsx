import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { authsource } from '@/lib/source';
import { baseOptions2,baseOptions } from '../layout.config';

export default function Layout({ children }: LayoutProps<'/authdocs'>) {
  return (
    <div className=''> 
      <DocsLayout tabMode='auto' tree={authsource.pageTree}
        {...baseOptions}
      >
        <div>

         {children}
        </div>
      </DocsLayout>
    </div>
  );
}
