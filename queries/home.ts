import { gql } from '@apollo/client';

const QUERY_HOME = gql`
  query Home {
    home(where: { id: "clda7s7j98gee0b18443d8ow2" }) {
      dataWebsite {
        metaDescription
        title1
        title2
        title3
      }
      fotoSlideshow {
        fotoSlideshow {
          url
          id
        }
      }
      galeriFoto {
        judul
        webmedia {
          media {
            url
          }
        }
      }
      testiVideo {
        judul
        webmedia {
          media {
            url
            id
          }
        }
      }
    }
  }
`;

export default QUERY_HOME;
