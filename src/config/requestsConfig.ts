import { RequestConfig } from "@models/dataModel";

export const RequestsConfig: RequestConfig[] = [
  // {pathTemplate: /photos/g},
  // {pathTemplate: 'your/*/custom/*/path/*/template'},
  {
    pathTemplate: '/api/v1/movies',
    method: 'GET',
    successMessage: (req, res) => {
      return 'موفقیت آمیز بود'
    },
    failureMessage: (req, res) => {
      return 'با موفقیت شکست خورد'
    },
    loading: true,
    catch: true,
    isCustomApi: false
  },
  {
    pathTemplate: 'https://jsonplaceholder.typicode.com/photos*',
    method: 'GET',
    successMessage: (req, res) => {
      return 'موفقیت آمیز بود'
    },
    failureMessage: null,
    loading: true,
    catch: false,
    isCustomApi: true // when set to true, pathTemplate compared with complete request url with its params, otherwise compared with endpoint
  },
];
