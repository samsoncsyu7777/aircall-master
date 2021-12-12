const getActivities = () => {
  const fetchOptions = {
    method: 'GET',
  };

  return fetch('https://aircall-job.herokuapp.com/activities', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

const getDetails = (id) => {
  const fetchOptions = {
    method: 'GET',
  };

  return fetch('https://aircall-job.herokuapp.com/activities/' + id, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

const updateActivities = (id, is_archived) => {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ is_archived: is_archived }),
  };

  return fetch('https://aircall-job.herokuapp.com/activities/' + id, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

const resetActivities = () => {
  const fetchOptions = {
    method: 'GET',
  };

  return fetch('https://aircall-job.herokuapp.com/reset', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

const activitiesAPIs = {
  getActivities: getActivities,
  getDetails: getDetails,
  updateActivities: updateActivities,
  resetActivities: resetActivities,
}

export default activitiesAPIs;