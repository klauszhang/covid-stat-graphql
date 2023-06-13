export type VaccineCoverage = {
    country: string;
    timeline: {
        date: string;
        coverage: number;
    }[];
};