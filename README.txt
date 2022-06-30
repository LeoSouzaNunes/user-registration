a. Describe possible optimizations for your code.

        I believe that the approach of adding a page for each step of the registration wasn't the best
    possible considering that we run very similar components on each step. Adapting a single component
    handling with the form's data update as well as add and remove inputs. It would avoid useless renders
    and increase the scalability.

b. Which things could be done better, than you’ve done it?

    - Add a hook to fetch api data.
    - Restructure the pages folder, make it a single component handling with the registration flow.
    - Refactor the redirection logic.