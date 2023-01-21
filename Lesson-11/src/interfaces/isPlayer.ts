export interface isPlayer {
  name: string;
  readonly country: string;
  getAge(): number;
  play(): void;
}
