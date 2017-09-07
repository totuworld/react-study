const login = async (payload) => {
  try {
    const res = await fetch(
      'http://localhost:3030/auth',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      });
    if (res.status !== 200) {
      return {
        isError: true,
        result: res.data,
      };
    }
    return {
      isError: false,
      result: res.data,
    };
  } catch (e) {
    return {
      isError: true,
      result: e,
    };
  }
};

export {
  login,
};
