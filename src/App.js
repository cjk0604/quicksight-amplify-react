import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import Dashboard from './Dashboard';
import { makeStyles } from '@material-ui/core/styles';

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(2)
  },
}));

function App() {
  
  const classes = useStyles();
  
  return (
    <div>
      <AmplifySignOut />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" color="textPrimary" className={classes.title} gutterBottom>
          Tech U Blog QuickSight Dashboard
        </Typography>
        <Dashboard />
      </Container>
    </div>
  );
}

export default withAuthenticator(App);
