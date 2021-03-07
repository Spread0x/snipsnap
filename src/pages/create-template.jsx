import Head from 'next/head';

import Layout from 'components/shared/layout';
import TemplateForm from 'components/shared/template-form';
import generatePageTitle from 'utils/generate-page-title';
import withAuth from 'utils/with-auth';

const CreateTemplatePage = () => (
  <Layout>
    <Head>
      <title>{generatePageTitle('Create Template')}</title>
    </Head>
    <TemplateForm />
  </Layout>
);

export async function getServerSideProps(context) {
  const data = await withAuth(context);
  return data;
}

export default CreateTemplatePage;
