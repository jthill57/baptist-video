import { GetStaticProps } from 'next';
import { Box, Sheet } from '@mui/joy';
import { withTranslations } from '@/util/i18n/withTranslations';

export interface HomePageProps {
  contentHtml: string;
}

const HomePage = () => {
  return (
    <Sheet
      variant="soft"
      sx={(theme) => ({ px: 5, py: 5, borderRadius: theme.spacing(1) })}
    >
      <Box>
        {`Under Construction`}
      </Box>
    </Sheet>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = withTranslations(async () => {
  return {
    props: {},
  };
});
