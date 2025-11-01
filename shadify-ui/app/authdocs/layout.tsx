import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { authsource } from '@/lib/source';
import { baseOptions2 } from '../layout.config';

export default function Layout({ children }: LayoutProps<'/authdocs'>) {
  return (
    <DocsLayout tree={authsource.pageTree}
      {...baseOptions2}
    >
      {children}
    </DocsLayout>
  );
}
