class LocalStorageProvider {
  constructor() {
    if (!LocalStorageProvider.instance) {
      const tokenData = localStorage.getItem("token");
      const uidData = localStorage.getItem("uid");
      if (tokenData) this.token = tokenData;
      if (uidData) this.uid = uidData;
      LocalStorageProvider.instance = this;
    }
    return LocalStorageProvider.instance;
  }

  onLogin() {
    this.token = localStorage.getItem("token");
    this.uid = localStorage.getItem("uid");
  }

  onLogout() {
    this.token = null;
  }
}

export const localStorageInstance = new LocalStorageProvider();
