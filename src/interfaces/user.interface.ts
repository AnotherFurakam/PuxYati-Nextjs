export interface ICreateUser {
  name: string
  lastname: string
  email: string
  hashedPassword: string
}

export interface IUserFull {
  id:             string;
  createAt:       Date;
  name:           string;
  lastname:       string;
  email:          string;
  userPlan:       UserPlan[];
}

export interface UserPlan {
  id:           string;
  start_date:   Date;
  expired_date: Date;
  plan:         Plan;
}

export interface Plan {
  id:              string;
  name:            string;
  price:           number;
  month_duration:  number;
  games:           number;
  additional_info: string[];
}