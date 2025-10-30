import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { authsource } from '@/lib/source';
import { baseOptions } from '../layout.config';

export default function Layout({ children }: LayoutProps<'/authdocs'>) {
  return (
    <DocsLayout tree={authsource.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
