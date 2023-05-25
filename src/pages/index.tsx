import { GetStaticProps } from 'next';
import { Box, Sheet } from '@mui/joy';
import { withTranslations } from '@/util/i18n/withTranslations';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { remark } from 'remark';
import html from 'remark-html';

export interface HomePageProps {
  contentHtml: string;
}

const HomePage = (props: HomePageProps) => {
  return (
    <Sheet
      variant="soft"
      sx={(theme) => ({ px: 2, py: 1, borderRadius: theme.spacing(1) })}
    >
      <Box>
        Under Construction
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
