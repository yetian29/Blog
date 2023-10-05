import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import BlogPost from './components/blog/BlogPost'
import BlogListCategory from "./components/blog/BlogListCategory";
import BlogSearch from "./components/blog/BlogSearch";

function App() {
  return (
    
    <Provider store={store}>
        <Router>
              <Routes>
                <Route path='*' element={<Error/>}/>
                <Route path='' element={<Home/>}/>
                <Route path='/blog/:slug' element={<BlogPost/>}/>
                <Route path='/blog/category/:category_id' element={<BlogListCategory/>}/>
                <Route path='/search/:term' element={<BlogSearch/>}/>

              </Routes>
        </Router>

    </Provider>
   

    
  
  );
}

export default App;
