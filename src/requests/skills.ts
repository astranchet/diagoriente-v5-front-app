import gql from 'graphql-tag';

import { MutationHookOptions, QueryHookOptions, LazyQueryHookOptions } from '@apollo/react-hooks';
import { useLocalMutation, useLocalQuery, useLocalLazyQuery } from 'hooks/apollo';
import { parcourResult } from 'requests/parcours';
import { PublicSkill, SkillType, UserParcour } from './types';

export const getSkillsQuery = gql`
  query Skills($ids: String) {
    skills(ids: $ids) {
      data {
        id
        theme {
          title
          id
          type
          resources {
            icon
            backgroundColor
          }
          parentId
        }
        activities {
          title
          description
          id
        }
        competences {
          _id {
            title
            rank
            id
            niveau {
              title
              sub_title
            }
          }
          value
        }
        comment {
          id
          lastName
          firstName
          commentText
          status
          email
          location
        }
        engagement {
          startDate
          endDate
          activity
          organization
          options {
            option {
              id
              title
            }
          }
          context {
            id
            title
            description
            icon
          }
        }
      }
    }
  }
`;
export interface SkillsArguments {
  ids?: string;
}
export interface SkillsData {
  skills: { data: SkillType[] };
}

export const useLazySkills = (options: LazyQueryHookOptions<SkillsData, SkillsArguments> = {}) =>
  useLocalLazyQuery(getSkillsQuery, options);

export const getSkillQuery = gql`
  query Skill($id: ID!) {
    skill(id: $id) {
      id
      theme {
        title
        id
        type
        resources {
          icon
          backgroundColor
        }
        parentId
      }
      activities {
        title
        description
        id
      }
      competences {
        _id {
          title
          rank
          id
          niveau {
            title
            sub_title
          }
        }
        value
      }
      comment {
        id
        lastName
        firstName
        commentText
        status
        email
        location
      }
      engagement {
        startDate
        endDate
        activity
        organization
        options {
          option {
            id
            title
          }
        }
        context {
          id
          title
          description
          icon
        }
      }
    }
  }
`;

export interface SkillArguments {
  id: string;
}
export interface SkillData {
  skill: SkillType;
}

export const useLazySkill = (options: LazyQueryHookOptions<SkillData, SkillArguments> = {}) =>
  useLocalLazyQuery(getSkillQuery, options);

export const addSkillMutation = gql`
  mutation AddSkill($theme: ID!, $activities: [ID], $competences: [skillCompetenceType]! , $engagement:skillEngagementInput) {
    addSkill(theme: $theme, activities: $activities, competences: $competences , engagement:$engagement) {
      ${parcourResult}
    }
  }
`;

export interface addSkillArguments {
  theme: string;
  activities?: string[];
  competences: {
    _id: string;
    value: number;
  }[];
  engagement?: {
    startDate: string;
    endDate: string;
    context: string;
    options: string[][];
    activity: string;
    organization: string;
  };
}

export const useAddSkill = (options: MutationHookOptions<{ addSkill: UserParcour }, addSkillArguments> = {}) =>
  useLocalMutation(addSkillMutation, options);

export const deleteSkillMutation = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      ${parcourResult}
    }
  }
`;

export const useDeleteSkill = (options: MutationHookOptions<{ deleteSkill: UserParcour }, { id: string }> = {}) =>
  useLocalMutation(deleteSkillMutation, options);

export interface updateSkillArguments {
  id: string;
  activities?: string[];
  competences: {
    _id: string;
    value: number;
  }[];
  engagement?: {
    startDate: string;
    endDate: string;
    context: string;
    options: string[][];
    activity: string;
    organization: string;
  };
}

export const updateSkillMutation = gql`
  mutation UpdateSkill($id: ID!, $activities: [ID], $competences: [skillCompetenceType] , $engagement: skillEngagementInput) {
    updateSkill(id: $id, activities: $activities, competences: $competences , engagement : $engagement) {
      ${parcourResult}
    }
  }
`;

export const useUpdateSkill = (options: MutationHookOptions<{ updateSkill: UserParcour }, updateSkillArguments> = {}) =>
  useLocalMutation(updateSkillMutation, options);

export const getPublicSkillQuery = gql`
  query PublicSkill($token: String!) {
    publicSkill(token: $token) {
      id
      user {
        id
        firstName
        lastName
        isCampus
      }
      theme {
        id
        title
      }
      competences {
        _id {
          id
          niveau {
            title
            sub_title
          }
          title
        }
        value
      }
      comment {
        status
        id
        email
        lastName
        firstName
      }
    }
  }
`;

export const useGetSkill = (options: QueryHookOptions<{ publicSkill: PublicSkill }, { token: string }>) =>
  useLocalQuery(getPublicSkillQuery, options);
