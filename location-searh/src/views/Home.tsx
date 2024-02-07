import Header from "./NavBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GetAll } from '../https/LocationServices';

function Home() {
    //variable
    //const navigate = useNavigate();

    const getLocations = async () => {
        try {
          const resp: any = await GetAll();
          // Check for a positive response from the API (modify as needed based on the API's actual response format)
          console.log(resp)
          if (resp.status === 200) {
            console.log(resp.data);
          } else {
            alert('Login failed. Please check your credentials and try again.');
          }
        } catch (error) {
          alert('An error occurred. Please try again.');
        }
      };

    return (
        <div>
            <Header />
            <div>
                <Form>
                    <Button variant="primary" type="button" onClick={getLocations}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Home;